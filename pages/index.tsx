import type { NextPage } from 'next'
import { useState } from 'react'
import Time from '../components/Time';
import '../styles/Home.module.css'

const Home: NextPage = () => {
  const [selectedType, setSelectedType] = useState("noframe");
  const [color, setColor] = useState("#ffffff");
  const [neon,setNeon] = useState("white");
  const [geometory, setGeometory] = useState("pattern1");
  const [chromakey, setChromakey] = useState("green");
  const [custom, setCustom] = useState("#000000");
  const [apex, setApex] = useState("red");
  const [retro, setRetro] = useState("pattern1");

  const onClickType = (e) =>{
    setSelectedType(e.target.value);
  }
  const colorSelect = (e)=>{
    setColor(e.target.value);
  }
  const neonSelect = (e)=>{
    setNeon(e.target.value);
  }
  const apexSelect = (e)=>{
    setApex(e.target.value);
  }
  const geometorySelect = (e)=>{
    setGeometory(e.target.value);
  }
  const changeChromakey = (e)=>{
    setChromakey(e.target.value);
  }
  const customChromakey = (e)=>{
    setCustom(e.target.value);
  }
  const retroSelect = (e)=>{
    setRetro(e.target.value);
  }


  const array = ["noframe","simple","pastel","neon","retroGame","liquid","geometory","apex","retro"];
  const neonArray = ["white","blue"];
  const chromakeyArray = ["green","red","blue","costom"];
  const geometryArray = ["pattern1","pattern2","pattern3"];
  const apexArray = ["red","blue","green"];
  const retroArray = ["pattern1","pattern2"];
  return (
    <div className="row">
      <div
        className={
          chromakey !== "costom"?
          `frame ${chromakey}`:
          `frame`
        }
        {...chromakey === "costom" && {style:{backgroundColor:custom}}}
      >
        <Time selectedType={selectedType} color={color} neon={neon} geometory={geometory} apex={apex} retro={retro}/>
        <div className="chromakey">
          <select 
            defaultValue={chromakey} 
            onChange={(e)=>changeChromakey(e)}
          >
            {chromakeyArray.map((item,index)=>{
              return <option key={index} value={item}>{item}</option>
            })}
          </select>
          {chromakey==="costom"&& <input type="color" onChange={(e)=>customChromakey(e)}/>}
        </div>
      </div>
      <div className="inner">
        <h1 className='page_title'>配信用&nbsp;時計オーバーレイ</h1>
        <p>配信で時刻を表示したい場合の素材としてご利用いただけます。</p>
        <p>デザインパターンは今後拡充予定です。</p>
        <p>ご利用にあたって、ご意見、ご要望などはTwitter（<a href="https://twitter.com/ts_create_" target="_blanc" rel="noopener">@ts_create_</a>）のDMでお願いします。</p>
        <section className='control'>
          <ul>
            {
              array.map((item,index)=>{
                return (
                  <li key={index}>
                    <input id={item} type="radio" name="type" value={item} onClick={onClickType}/>
                    <label htmlFor={item}>{item}</label>
                    {item==="noframe" && <input type='color' defaultValue={color} style={{marginLeft:"10px",width:"50px"}} onChange={(e)=>colorSelect(e)}/>}
                    {item==="neon" &&
                      <select style={{marginLeft:"10px"}} onChange={e=>neonSelect(e)}>
                        {neonArray.map((item,index)=>{
                          return <option key={index} value={item}>{item}</option>
                        })}
                      </select>
                    }
                    {item==="geometory"&&
                      <select style={{marginLeft:"10px"}} onChange={e=>geometorySelect(e)}>
                        {geometryArray.map((item,index)=>{
                          return <option key={index} value={item}>{item}</option>
                        })}
                      </select>
                    }
                    {item==="apex"&&
                      <select style={{marginLeft:"10px"}} onChange={e=>apexSelect(e)}>
                        {
                          apexArray.map((item,index)=>{
                            return <option key={index} value={item}>{item}</option>
                          })
                        }
                      </select>
                    }
                    {item==="retro"&&
                      <select style={{marginLeft:"10px"}} onChange={e=>retroSelect(e)}>
                        {
                          retroArray.map((item,index)=>{
                            return <option key={index} value={item}>{item}</option>
                          })
                        }
                      </select>
                    }
                  </li>
                )
              })
            }
          </ul>
        </section>
        <small>
          <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。</p>
          <p>このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。</p>
          <p> この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" rel='noopener'> Googleアナリティクスサービス利用規約</a>のページや<a href="https://policies.google.com/technologies/ads?hl=ja" rel="noopener">Googleポリシーと規約</a>ページをご覧ください。</p>
        </small>
      </div>
    </div>
  )
}

export default Home
