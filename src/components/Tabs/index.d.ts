import { Component } from 'react'

interface TabProps {
  tabs: Array
  initialPage: number
  tintColor: string
  onTabPress: Function
  onChange: Function
}

export default class Tab extends Component<TabProps, {}> {}
