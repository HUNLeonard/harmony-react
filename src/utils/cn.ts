export default function cn(...args: string[]) {
  return args.map((arg) => arg.trim()).join(" ");
}
