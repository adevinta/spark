/**
 * A utility function that serves as a workaround for Tailwind CSS IntelliSense issues
 * in large objects or when regex breaks in VSCode.
 *
 * For more context, see: https://github.com/joe-bell/cva/discussions/85#discussioncomment-4568738
 *
 * @example
 *
 * // before
 * const styles: cva(['flex bg-main', 'cursor-pointer'], {
 *   variants: {
 *     size: {
 *       small: "h-sz-24",
 *       medium: "h-sz-48"
 *     }
 *   }
 * })
 *
 * // after
 * const styles = cva(tw(['flex bg-main', 'cursor-pointer']), {
 *   variants: {
 *     size: {
 *       small: tw("h-sz-24"),
 *       medium: tw("h-sz-48"),
 *     }
 *   }
 * })
 */
export function tw<T>(v: T) {
  return v
}
