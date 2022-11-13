import React, {useEffect} from 'react'
import '../displaySection/displaysection.css'
import NativeModal from '../displaySection/content/nativeModal/native'
import D3Modal from '../displaySection/content/d3Modal/d3'
import ReactModal from '../displaySection/content/reactCModal/reactModal'
import GpModal from '../displaySection/content/GPModal/gpModal'
import RwmgModal from '../displaySection/content/RWMGModal/rwmgModal'
import TimoModal from '../displaySection/content/timoModal/timoModal'
import PlaceholderModal from './content/placeholderModal/placeholderModal'
import { dataTable, websiteSections } from '../../database/dataTable'
function Display(props) {
    const [generalModa, setGeneralModal] = React.useState(false);
    const [data, setData] = React.useState({});

    useEffect(() => {
        console.log(dataTable)
    }, [dataTable])
   
    
    const handelClick = (item) => {
        setData(item);
        setGeneralModal(true)
    }
    return (
        <section className='projects'>
            {websiteSections?.map((item,i) => 
            <div id='Display'>
                <div id='nav'>
                    <p className="nav-link0"><i class="far fa-file-code"></i> {item?.title}</p>
                </div>
                    <ul className='photoposts'>
                    {
                    dataTable?.filter(innerItem => 
                        item?.id === 1? 
                            innerItem?.period === 'mvp':
                        item?.id === 2? 
                            innerItem?.period === 'freelancer':
                        item?.id === 3? 
                            innerItem?.period === 'freeCodeCamp':
                        innerItem?.period === 'graduation'
                        ).map((innerInnerItem, index) => 
                        <li key={i} className='photolink'>
                            <a className='itemlink' onClick={()=> handelClick(innerInnerItem)}>
                                <img className='imgposts' src={innerInnerItem?.icon} alt='post'
                                    style={{
                                        height: '120px', 
                                        width: '160px' , 
                                        objectFit: 'contain',  
                                        verticalAlign: 'bottom', 
                                        borderRadius:'15px', 
                                        padding:'5px', 
                                    }}
                                />
                            </a>
                        </li>
                    )}
                    </ul>
            </div>
            )}
            <NativeModal
                show={generalModa}
                closethis={setGeneralModal}
                data = {data}
                onHide={() => setGeneralModal(false)}
            />
        </section>
    )
}
export default Display