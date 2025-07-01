function Panel({title, children}){
  return <section className="">
    <h2 className="">{title}</h2>
    {children}
  </section>
}

export default Panel;