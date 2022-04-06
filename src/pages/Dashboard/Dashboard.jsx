import React from 'react'
import DashHeader from '../../components/DashboardHeader/DashHeader'
import DashMain from '../../components/DashboardMain/DashMain'

import {
  DashboardContainer
} from './DashboardElements'

const Dashboard = () => {
  return (
    <DashboardContainer>
        <DashHeader />
        <DashMain />
    </DashboardContainer>
  )
}

export default Dashboard