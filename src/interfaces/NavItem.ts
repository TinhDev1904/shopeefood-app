export default interface NavItem {
    label: string;
    slug: string;
    sub?: {label: string, slug: string}[];
}