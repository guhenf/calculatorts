import { createTheme } from '@mui/material'

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: '#fff' },
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
