import './ErrorHandling.css'
import PropTypes from 'prop-types'

const ErrorHandling = ({error})=> {

    return (
        <div className='error-cont'>
            <div className='error-page'>
                {error ? (
                <>
                    <h1>500</h1>
                    <p>{error}</p>
                </>
                ) : (
                <>
                    <h1>404</h1>
                    <p>This page does not exist.</p>
                </>
                )}
                    <p>Click on the logo to go back home.</p>
            </div>
        </div>
    )
}

ErrorHandling.propTypes = {
    error: PropTypes.string
}

export default ErrorHandling