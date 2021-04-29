import React from 'react';

import '../../Css/card.css'
const HEIGHT = 800
class CardList extends React.Component {

    componentDidMount() {
        this.div.addEventListener('scroll', this.Scroll)
    }


    Scroll = (e) => {
        const { set, listOfCard } = this.props
        if (Math.round(this.div.scrollTop + HEIGHT) >= this.div.scrollHeight)
            set({
                start: listOfCard.length,
                limit: 10,
            })
    }




    renderList = () => {
        const { listOfCard } = this.props
        {
            return listOfCard.map((img, i) => {
                return (

                    <div key={i} className="card">
                        <img src={img.url} alt="Avatar" style={{ width: "100%" }} />
                        <div className="container">
                            <h4><b>culpa odio esse rerum omnis laboriosam voluptate repudiandae</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                )
            })
        }
    }


    render() {
        const style = {
            height: HEIGHT,
            overflow: 'auto',
        }
        return (
            <div style={style} className="cardall" ref={(div) => (this.div = div)}>
                {this.renderList()}
            </div>
        )
    }
}

export default CardList