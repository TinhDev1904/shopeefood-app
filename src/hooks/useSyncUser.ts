'use client';

import { useEffect, useState } from "react";
import { useUser } from "@stackframe/stack";

export function useSyncUser() {
  const user = useUser();
  const [status, setStatus] = useState<"idle" | "syncing" | "done" | "error">("idle");
  const [hasSynced, setHasSynced] = useState(false);

  useEffect(() => {
    if (!user) return;              // user === null hoặc undefined
    if (!user.id) return;           // user chưa load xong
    if (hasSynced) return;          // tránh sync lại nhiều lần

    const sync = async () => {
      setStatus("syncing");

      try {
        const body = {
          externalId: user.id,
          email: user.primaryEmail,
          name: user.displayName,
          avatarUrl: user.profileImageUrl,
        };

        await fetch("/api/sync-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        setStatus("done");
        setHasSynced(true);
      } catch (err) {
        console.error("Sync failed:", err);
        setStatus("error");
      }
    };

    sync();
  }, [user, hasSynced]);

  return { user, status };
}
