import React from 'react'

const LinkProp = (prop) => {
  return (
    <div>
      <a href='#' className="text-[#8643DC] font-[red hat display] font-normal text-xl border-b-[4px] inline border-purple-700 pb-2">
        {prop.text}
      </a>
    </div>
  );
}

export default LinkProp