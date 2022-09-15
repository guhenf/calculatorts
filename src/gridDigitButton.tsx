import { Button, Grid, styled } from '@mui/material'

interface GridDigitButtonProps {
	digit: string
	enterDigit: (digit: string) => void
	xs?: number
}

const StyledButton = styled(Button)(() => ({
	borderWidth: 1.5,
	borderColor: '#fff',
}))

export const GridDigitButton: React.FC<GridDigitButtonProps> = ({
	digit,
	enterDigit,
	xs = 3,
}) => {
	return (
		<Grid item xs={xs}>
			<StyledButton fullWidth variant="outlined" onClick={() => enterDigit(digit)}>
				{digit}
			</StyledButton>
		</Grid>
	)
}
