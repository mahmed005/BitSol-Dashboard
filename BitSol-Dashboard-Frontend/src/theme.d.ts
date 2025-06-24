import type { Palette } from "@mui/icons-material"

declare module '@mui/material/styles' {
    interface Palette {
        'white-selected': Palette['Primary'];
        tertiary: Palette['Primary'];
        customGrey: Palette['primary'];
    }

    interface PaletteOptions {
        'white-selected'?: PaletteOptions['Primary'];
        tertiary?: PaletteOptions['Primary'];
        customGrey?: PaletteColorOptions;
    }
}