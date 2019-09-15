import React, { Component } from 'react'

export default class Yapilacaklar extends Component {
    state = {
        yapilacaklar: [{ is: 'React ogren', yapildiMi: false }, { is: 'Izmir\'e ucus biletini al', yapildiMi: true }],
        yeniYapilacak: ''
    }
    
    render() {
        let { yapilacaklar: todos, yeniYapilacak } = this.state

        return (
            <div>
                <input type='text' value={yeniYapilacak} onChange={(e) => this.setState({ yeniYapilacak: e.target.value })}></input>
                <button onClick={() => {
                    if (yeniYapilacak.trim() === '') return alert('Bos birakma ulan')
                    todos.unshift({ is: yeniYapilacak, yapildiMi: false })
                    this.setState(todos)
                }}>Ekle</button><br /><br />
                <ul style={{listStyleType: 'none'}}>
                {todos.map((todo, i) => <li key={i}><div style={{display: 'inline-block'}}><span style={!todo.yapildiMi ? {color: 'red'} : {color: 'green', textDecorationLine: 'line-through'}}>{todo.is}</span> <span style={{cursor: 'pointer'}} onClick={
                    () => {
                        todos[i].yapildiMi = !todos[i].yapildiMi
                        this.setState(todos)
                    }
                }>{'{'}{todo.yapildiMi ? 'Yapilmadi' : 'Yapildi'} olarak isaretle{'}'}</span></div></li>)}
                </ul>
            </div>
        )
    }
}
