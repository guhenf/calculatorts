import { Button, Grid, Paper, styled } from '@mui/material'
import { Container } from '@mui/system'
import { useState } from 'react'
import { GridDigitButton } from './gridDigitButton'
import { GridOperationButton } from './gridOperationButton'

const OutputContainer = styled('div')(({ theme }) => ({
	width: '100%',
	height: '2em',
	padding: theme.spacing(2),
	textAlign: 'right',
	fontSize: '3em',
	overflow: 'hidden',
}))

const Calculator = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(2),
	marginTop: theme.spacing(4),
	borderRadius: 15,
}))

function App() {
	const [currentValue, setCurrentValue] = useState('0')
	const [operation, setOperation] = useState('')

	const setDigit = (digit: string) => {
		setCurrentValue(digit)
	}

	const selectOperation = (operation: string) => {
		setOperation(operation)
	}

	return (
		<Container maxWidth="sm">
			<Calculator elevation={3}>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<OutputContainer>{currentValue}</OutputContainer>
					</Grid>
					<Grid item container columnSpacing={1}>
						<GridOperationButton
							operation={'AC'}
							selectOperation={selectOperation}
							selectedOperation={operation}
						/>
						<GridOperationButton
							operation={'C'}
							selectOperation={selectOperation}
							selectedOperation={operation}
						/>
						<GridOperationButton
							operation={'%'}
							selectOperation={selectOperation}
							selectedOperation={operation}
						/>
						<GridOperationButton
							operation={'÷'}
							selectOperation={selectOperation}
							selectedOperation={operation}
						/>
					</Grid>
					<Grid item container columnSpacing={1}>
						<GridDigitButton digit={'7'} enterDigit={setDigit}></GridDigitButton>
						<GridDigitButton digit={'8'} enterDigit={setDigit}></GridDigitButton>
						<GridDigitButton digit={'9'} enterDigit={setDigit}></GridDigitButton>
						<GridOperationButton
							operation={'*'}
							selectOperation={selectOperation}
							selectedOperation={operation}
						/>
					</Grid>
					<Grid item container columnSpacing={1}>
						<GridDigitButton digit={'4'} enterDigit={setDigit}></GridDigitButton>
						<GridDigitButton digit={'5'} enterDigit={setDigit}></GridDigitButton>
						<GridDigitButton digit={'6'} enterDigit={setDigit}></GridDigitButton>
						<GridOperationButton
							operation={'-'}
							selectOperation={selectOperation}
							selectedOperation={operation}
						/>
					</Grid>
					<Grid item container columnSpacing={1}>
						<GridDigitButton digit={'1'} enterDigit={setDigit}></GridDigitButton>
						<GridDigitButton digit={'2'} enterDigit={setDigit}></GridDigitButton>
						<GridDigitButton digit={'3'} enterDigit={setDigit}></GridDigitButton>
						<GridOperationButton
							operation={'+'}
							selectOperation={selectOperation}
							selectedOperation={operation}
						/>
					</Grid>
					<Grid item container columnSpacing={1}>
						<GridDigitButton digit={'0'} enterDigit={setDigit}></GridDigitButton>
						<GridDigitButton digit={'.'} enterDigit={setDigit}></GridDigitButton>
						<Grid item xs={6}>
							<Button fullWidth variant="contained">
								=
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Calculator>
		</Container>
	)
}

export default App
