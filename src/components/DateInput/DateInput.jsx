import './DateInput.scss'

const DateInput = ({ setDate }) => {
    return (
        <div className="dateInputContainer">  
            <h2><label htmlFor="id">Select a date</label></h2>
            <input id="date" type="date" min="2021-01-02" onChange={(e) => setDate(new Date(e.target.value).toLocaleDateString())} />
        </div>
    )
}

export default DateInput