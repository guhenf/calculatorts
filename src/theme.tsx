import { createTheme } from '@mui/material'

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: '#000' },
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 25,
				},
			},
		},
	},
	typography: {
		button: {
			fontSize: '1rem',
		},
	},
})
