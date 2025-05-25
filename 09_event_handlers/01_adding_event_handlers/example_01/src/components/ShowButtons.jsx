function ShowButton({classnames, onclick, children}){
  return <button className={classnames.map(cls => cls + " ")} onClick={onclick}>{children}</button>
}

export default ShowButton;