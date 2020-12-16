import React, {useState} from 'react'
import {connect} from 'react-redux'
import {
    FormControl,
    Button,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormHelperText
} from '@material-ui/core'
import {commandHandler} from '../../actions'

const CommandBar = ({onSubmit, errors}) => {

    const [value, setValue] = useState('')

    const onChangeHandle = e => {
        setValue(e.target.value)
    }
    const submit = e => {

        e.preventDefault()
        onSubmit(value)

    }

    return (
        <form style={{width: '100%'}} onSubmit={submit}>
            <FormControl error={errors.length !== 0}
                         variant="outlined"
                         style={{width: '100%'}}
            >
                <InputLabel htmlFor="outlined-adornment">Command</InputLabel>
                <OutlinedInput
                    error={errors.length !== 0}
                    id="outlined-adornment"
                    value={value}
                    onChange={onChangeHandle}
                    endAdornment={
                        <InputAdornment position="end">
                            <Button variant="contained"
                                    color="primary"
                                    onClick={submit}
                            >
                                submit
                            </Button>
                        </InputAdornment>
                    }
                    labelWidth={75}
                />
                {errors.length !== 0 &&
                <FormHelperText id="outlined-weight-helper-text">Errors: {errors.join(', ')}</FormHelperText>}
            </FormControl>
        </form>
    )
}

CommandBar.propTypes = {}

function mapStateToProps(state) {
    return {
        errors: state.purchases.errors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: value => dispatch(commandHandler(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommandBar)