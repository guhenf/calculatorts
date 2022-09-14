import { Button, Grid, styled } from '@mui/material'

interface GridOperationButtonProps {
	operation: string
	selectOperation: (operation: string) => void
	selectedOperation: string
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
	backgroundColor: '#1c5560',
	borderColor: props.selected ? '#001f36' : '#fff',
	borderWidth: 1.5,
}))

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
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
