import Swimlane from './Swimlane'

export default function Board() {
  return (
    <section className='container cards-container'>
      <div className='level-item'>
        <div className='columns is-mobile is-centered is-multiline board-container'>
          <Swimlane type='backlog' color='waring' />
          <Swimlane type='inProgress' color='info'/>
          <Swimlane type='codeReview' color='danger'/>
          <Swimlane type='done' color='success'/>
        </div>
      </div>
    </section>
  )
}
