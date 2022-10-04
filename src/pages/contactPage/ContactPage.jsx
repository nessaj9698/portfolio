import React from 'react'
import ContactsPageSidebar from './sidebar/ContactsPageSidebar'
import ContactsPageContent from './content/ContactsPageContent'
import StyledInnerPage from '../../components/pageInner/PageInner'


function ContactPage() {
  return (
    <StyledInnerPage>
        <ContactsPageSidebar/>
        <ContactsPageContent/>
    </StyledInnerPage>
  )
}

export default ContactPage