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
	const [prevValue, setPrevValue] = useState('')
	const [overwrite, setOverwrite] = useState(true)

	const calculate = () => {
		if (!prevValue || !operation) return currentValue

		const curr = parseFloat(currentValue)
		const prev = parseFloat(prevValue)

		let result

		switch (operation) {
			case '÷':
				result = prev / curr
				break
			case '-':
				result = prev - curr
				break
			case '*':
				result = prev * curr
				break
			case '+':
				result = prev + curr
				break
		}
		return result
	}

	const equals = () => {
		const val = calculate()
		setCurrentValue(`${val}`)
		setPrevValue('')
		setOperation('')
		setOverwrite(true)
	}

	const clearOutput = () => {
		setPrevValue('')
		setOperation('')
		setCurrentValue('0')
		setOverwrite(true)
	}

	const deleteOutput = () => {
		setCurrentValue('0')
		setOverwrite(true)
	}

	const selectOperation = (operation: string) => {
		setOperation(operation)
		setPrevValue(currentValue)
		setOverwrite(true)
	}

	const setDigit = (digit: string) => {
		if (currentValue[0] === '0' && digit === '0') return
		if (currentValue.includes('.') && digit == '.') return
		if (overwrite && digit !== '.') {
			setCurrentValue(digit)
		} else {
			setCurrentValue(`${currentValue}${digit}`)
		}
		setOverwrite(false)
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
							selectOperation={clearOutput}
							selectedOperation={operation}
						/>
						<GridOperationButton
							operation={'C'}
							selectOperation={deleteOutput}
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
							<Button fullWidth variant="contained" onClick={equals}>
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
