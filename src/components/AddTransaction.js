import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor='Description'>
                        Description
                    </label>
                    <input type="text"
                           id="Description"
                           placeholder="Details of Transcations"
                     />
                     <div className="form-control">
                     <label htmlFor='transcationamount'>
                         Transaction Amount
                     </label>
                     <input type="number"
                            id="transcationamount"
                            placeholder="Add Amount"               
                     />
                     </div>

                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
