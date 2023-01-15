import { setTickets } from '../store/actions'
import Swimlane from './Swimlane'

export default function Board() {
  const statuses = [
    {
      type: 'backlog',
      tickets: [
        {
          id: 1,
          title: 'Error message displayed when trying to submit form',
          description:
            'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
          status: 'Backlog',
        },
        {
          id: 2,
          title: 'Website not responsive on mobile devices',
          description:
            'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
          status: 'Backlog',
        },
        {
          id: 3,
          title: 'Broken links found on the contact page',
          description:
            'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
          status: 'Backlog',
        },
      ],
    },
    {
      type: 'in progress',
      tickets: [
        {
          id: 1,
          title: 'Error message displayed when trying to submit form',
          description:
            'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
          status: 'Backlog',
        },
        {
          id: 2,
          title: 'Website not responsive on mobile devices',
          description:
            'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
          status: 'Backlog',
        },
        {
          id: 3,
          title: 'Broken links found on the contact page',
          description:
            'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
          status: 'Backlog',
        },
      ],
    },
    {
      type: 'code review',
      tickets: [
        {
          id: 1,
          title: 'Error message displayed when trying to submit form',
          description:
            'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
          status: 'Backlog',
        },
        {
          id: 2,
          title: 'Website not responsive on mobile devices',
          description:
            'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
          status: 'Backlog',
        },
        {
          id: 3,
          title: 'Broken links found on the contact page',
          description:
            'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
          status: 'Backlog',
        },
      ],
    },
    {
      type: 'done',
      tickets: [
        {
          id: 1,
          title: 'Error message displayed when trying to submit form',
          description:
            'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
          status: 'Backlog',
        },
        {
          id: 2,
          title: 'Website not responsive on mobile devices',
          description:
            'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
          status: 'Backlog',
        },
        {
          id: 3,
          title: 'Broken links found on the contact page',
          description:
            'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
          status: 'Backlog',
        },
      ],
    },
  ]

  const swimlanes = statuses.map((status, index) => <Swimlane key={`status ${index}`} type={status.type} tickets={status.tickets} />)

  return (
    <div className='level-item'>
      <div className='columns is-multiline is-centered cards-container'>{swimlanes}</div>
    </div>
  )
}
