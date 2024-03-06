import React from "react";
import graph from "/income-graph.png"

export default function Income(){
    const transactionsData = [
        { amount: 720, date: "01/12/22", id: "1" },
        { amount: 560, date: "10/11/22", id: "2" },
        { amount: 980, date: "23/11/22", id: "3" },
    ]

    return(
       <div className="host-income">
        <section className="host-income-initial">
            <h1>Income</h1>
            <p>Last <span>30 days</span></p>
            <h2>$2,260</h2>
        </section>
        <section className="host-income-graph">
            <img src= {graph} alt="" />
        </section>
        <section className="income-end">
            <div className="income-header">
                <h3>Your transactions ({transactionsData.length})</h3>
                <p>Last<span>30 days</span></p>
            </div>
            <div className="transactions">
                {transactionsData.map((item) => (
                        <div key={item.id} className="host-van-single transact">
                            <h3>${item.amount}</h3>
                            <p>{item.date}</p>
                        </div>
                    ))
                }
            </div>
        </section>
       </div>
    )
}