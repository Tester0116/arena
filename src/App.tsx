import React, { useState } from "react"
import "./App.scss"

function App() {
  // start interfaces
  interface ISeat {
    free: boolean
  }
  interface ISector {
    name: string
    seats: ISeat[]
  }
  // end interfaces

  const [modal, setModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<ISeat[]>([])

  const __modalHandler = (sector: ISector) => {
    setModal(true)
    setModalData(sector.seats)
    console.log(sector.seats)
  }
  return (
    <div className="App">
      {sectorsData.map((sector) => (
        <div
          className="sector"
          key={sector.name}
          onClick={() => __modalHandler(sector)}
        >
          <h5 className="sector__name">{sector.name}</h5>
        </div>
      ))}
      {modal && (
        <div className={modal ? "modal active" : "modal"}>
          <div className="modal__content">
            <span className="modal__close" onClick={() => setModal(false)}>
              &times;
            </span>
            {modalData.map((seat, index) => (
              <div
                className="modal__item"
                key={index}
                style={{ background: seat.free ? "#888" : "white" }}
                onClick={() => console.log(!seat.free ? index + 1 : "occupied")}
              >
                {seat.free ? "occupied" : index + 1}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
const sectorsData = [
  {
    name: "A",
    seats: [
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
    ],
  },
  {
    name: "B",
    seats: [
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
    ],
  },
  {
    name: "C",
    seats: [
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
    ],
  },
  {
    name: "D",
    seats: [
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
    ],
  },
  {
    name: "E",
    seats: [
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
    ],
  },
  {
    name: "F",
    seats: [
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
    ],
  },
  {
    name: "G",
    seats: [
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
      { free: true },
      { free: false },
    ],
  },
]

export default App
