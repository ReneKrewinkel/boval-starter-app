export enum LogoSize {
    small = "50",
    regular = "100",
    medium = "200",
    large = "400",
    jumbo = "600"
}

// export interface LogoInterface {
//     size: "50" | "100" | "150" | "200" | "400" | "600"
// }

export interface LogoInterface {
    size: LogoSize
}