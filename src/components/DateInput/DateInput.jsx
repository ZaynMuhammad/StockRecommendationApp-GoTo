
const DateInput = ({ setDate }) => {
    return (
        <>  
            <h2>Select a date</h2>
            <input type="date" min="2021-01-02" onChange={(e) => setDate(new Date(e.target.value).toLocaleDateString())} />
        </>
    )
}

export default DateInput