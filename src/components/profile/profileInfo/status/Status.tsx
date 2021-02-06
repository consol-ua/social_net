import React, { useState } from 'react'

type statusPropsType = {
  status: string,
  editMode: boolean | undefined
  onEditMode: (edit: boolean) => void
}
const Status = (props: statusPropsType) => {
  let [state, setState] = useState({ statusText: props.status, localEditMode: false })
  // const editStatus = (edit: boolean) => {
  //   props.onEditMode(edit)
  // }
  const activeLocalEditMode = () => {
    setState({ ...state, localEditMode: true })
  }
  const deActiveLocalEditMode = () => {
    setState({ ...state, localEditMode: false })
  }

  console.log(state)
  return <div>
    {!state.localEditMode ?
      <span onDoubleClick={activeLocalEditMode}>{props.status ? props.status : 'default status'}</span> :
      <textarea onChange={(e) => { setState({ ...state, statusText: e.target.value }) }}
        onBlur={deActiveLocalEditMode}
        autoFocus={true}
        onFocusCapture={(e) => e.target.select()}
        value={state.statusText} />}
  </div>
}
export default Status