import { Button, Grid, styled } from '@mui/material'

interface GridOperationButtonProps {
	operation: string
	selectOperation: (operation: string) => void
	selectedOperation: string
}

export const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
	backgroundColor: props.selected ? '#648a64' : '#a6b985',
	borderColor: props.selected ? '#454545' : '#fff',
	color: props.selected ? '#454545' : '#fff',
	borderWidth: 1.5,
	height: '2.57rem',
	fontSize: '1.5rem',
}))

export const GridBasicOperationButton: React.FC<GridOperationButtonProps> = ({
	operation,
	selectedOperation,
	selectOperation,
}) => {
	return (
		<Grid item xs={3}>
			<StyledButton
				fullWidth
				variant="outlined"
				onClick={() => selectOperation(operation)}
				selected={selectedOperation === operation}
			>
				{operation}
			</StyledButton>
		</Grid>
	)
}
