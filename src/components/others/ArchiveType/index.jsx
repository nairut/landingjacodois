import React, { useEffect, useRef, useState } from 'react'
import { languages, typeContent} from '../../../constants'
// import { MultiSelect } from 'react-multi-select-component';
import './style.css'

const Item = ({name, handleClick}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleItemClick = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    handleClick()
  },[isChecked])
  return (
    <li className={`item ${isChecked ? 'checked' : ''}`} onClick={handleItemClick} >
        <span className="checkbox">
            <i className="fa-solid fa-check check-icon"></i>
        </span>
        <span className="item-text">{name}</span>
    </li>
  )
}

const ArchiveType = ({data, updateFieldHandler, inputs}) => {
    // const [selected, setSelected] = useState([]);
    const [openFirst, setOpenFirst] = useState(false)
    const [languagens, setLanguages] = useState()
    const selectRef = useRef(null)
    // const [selectedOrigin, setSelectedOrigin] = useState([]);
    // const [selectedArchiveType, setSelectedArchiveType] = useState([])

    // const handleChangeOrigin = (option) => {
    //   console.log(option);
    //   if (selectedOrigin[0]) {
    //     setSelectedOrigin(prev => {
    //       if (option[1]) {
    //         updateFieldHandler("origin", option[1].label)
    //         return [option[1]]  
    //       } else {
    //         updateFieldHandler("origin", [])
    //         return []
    //       }
    //     })
    //   } else {
    //     setSelectedOrigin(prev => {
    //       updateFieldHandler("origin", option[0].label || "")
    //       return option
    //     })
    //   }
    // }
    // const handleChangeTranslation = (options) => {
    //   let string = []
    //   options.forEach(element => {
    //     string.push(element.label)
    //   });
    //   setSelected(prev => {
    //     updateFieldHandler("translation", string.join(", "))
    //     return options
    //   })
    // }
    // const handleChangeContent = (option) => {
    //   console.log(option);
    //   if (selectedArchiveType[0]) {
    //     setSelectedArchiveType(prev => {
    //       if (option[1]) {
    //         updateFieldHandler("typeArchive", option[1].label)
    //         return [option[1]]  
    //       } else {
    //         updateFieldHandler("typeArchive", [])
    //         return []
    //       }
    //     })
    //   } else {
    //     setSelectedArchiveType(prev => {
    //       updateFieldHandler("typeArchive", option[0].label || "")
    //       return option
    //     })
    //   }
    // }
    // if (selectRef.current && !selectRef.current.contains(e.target)) {
    // }
    const handleClick = () => {
      setOpenFirst(prev => !prev)
    }

    const handleGetValue = () => {
      const elements = document.getElementById('list').querySelectorAll('.checked');
      let itens = []
      elements.forEach((element) => {
        itens.push(element.textContent)
      });
      updateFieldHandler("translation", itens.join(", "))
      if (elements.length > 4) {
        const newLayout = itens.slice(0, 4)
        setLanguages(`${newLayout.join(", ")}...`)
      } else {

        setLanguages(itens.join(", "))
      }
    }
    useEffect(() => {
      const handleClickOutside = (e) => {
        console.log(selectRef);
        if (selectRef.current && !selectRef.current.contains(e.target)) {
          setOpenFirst(false);
        }
      }

      if (openFirst) {
        document.addEventListener('click', handleClickOutside)
      } else {
        document.removeEventListener('click', handleClickOutside)
      }

      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    },[openFirst])
  return (
    <div className='input-steps-content'>
        <div className="input">
            <label htmlFor="content">{inputs[0]}</label> <br />
            <select name="content" id="content" onChange={e => updateFieldHandler("typeArchive", e.target.value)}>
            {typeContent.map((item, index) => (
              <option key={index} value={item.value}>{item.label}</option>
            ))}
            </select>
            {/* <MultiSelect
              options={typeContent}
              value={selectedArchiveType}
              onChange={handleChangeContent}
              hasSelectAll={false}
              closeOnChangedValue={true}
            /> */}
            
        </div>
        <div className="input">
            <label htmlFor="languages">{inputs[1]}</label> <br />
            <select name="languages" id="languages" onChange={e => updateFieldHandler("origin", e.target.value)}>
            {languages.map((item, index) => (
              <option key={index} value={item.value}>{item.label}</option>
            ))}
            </select>
            
            {/* <MultiSelect
              options={languages}
              value={selectedOrigin}
              onChange={handleChangeOrigin}
              hasSelectAll={false}
              closeOnChangedValue={true}
            /> */}
            {/* <select value={data.origin} name="origem" onChange={(e) => updateFieldHandler("origin", e.target.value)} id="">
              {languages.map((item, index) => (
                <option value={item.value}>{item.label}</option>
              ))}

            </select> */}
        </div>
        <div className="input" ref={selectRef}>
          
            <label>{inputs[2]}</label> <br />
            <div  className={`select select-btn ${openFirst && 'open'}`} onClick={handleClick}>
                <span className="btn-text">{languagens || "Selecione"}</span>
            </div>
            <ul className="list-items" id='list'>
                {languages.map((item, index) => (
                  <Item key={index} name={item.label} handleClick={handleGetValue} />
                ))}

            </ul>
            {/* <MultiSelect
              options={languages}
              value={selected}
              onChange={handleChangeTranslation}
              hasSelectAll={false}
            /> */}
            {/* <select value={""} name="tradução" id="traducao">
              {languages.map((item, index) => (
                <option value={item.value}>{item.label}</option>
              ))}

            </select> */}
        </div>
    </div>
  )
}

export default ArchiveType