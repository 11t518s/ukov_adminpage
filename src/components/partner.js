import React, { useEffect, useState } from 'react';
import { dbService, storageService } from '../fbase';
import { v4 as uuidv4 } from "uuid";

function Partner() {
    // partner 정보 받아오기

        const [partner, setpartner] = useState([]);
        const getpartner = async () =>{
            const dbpartner = await dbService.collection("partner").orderBy("createdAt").get();
            dbpartner.forEach((document) => {
                const newpartner = {
                    ...document.data(),
                    id: document.id
                };
                setpartner((prev) => [newpartner, ...prev]);
            });
        };
        useEffect(()=>{
            getpartner();  
        }, [])
        let [Link, setNewLink] = useState('')
        const newLinkChange = (event) => {
            const {target :{value}} = event;
            setNewLink(value)
        }

        const [newFile, setNewFile] = useState()
        const newfileChange = (event) => {
            const {
                target: {files}
            } = event;
            const theFile = files[0];
            const reader = new FileReader();
            reader.onloadend = (finishedEvent) => {
                setNewFile(finishedEvent.currentTarget.result)
            };
            reader.readAsDataURL(theFile);
            
        };

        const newSubmit = async (event) => {
            event.preventDefault();
    
            // 파일을 스토리지에 업로드하기
            const fireRef = storageService.ref().child(`partner/${uuidv4()}`)
            const response = await fireRef.putString(newFile, "data_url")
            const partnerURL = await response.ref.getDownloadURL();
    
    
            // 스트링 정보를 넣어주기
            await dbService.collection("partner").add({
                partnerLink: Link,
                partnerURL: partnerURL,
                createdAt: Date.now(),
            })
    
            // 새로 업로드 후 input 태그 초기화
            setNewLink('')
            alert('새로고침 하신 후 확인해보세요 :)')
        }
    





    return (
        <>
        <div className='title'>홈탭의 UKOV후기와 프로그램탭의 스타트업 인턴십 <b>두곳 모두</b> 수정되는 곳입니다!</div>
        <div className='subtitle'> 추가하기 </div>

            <form onSubmit={newSubmit}>
            이미지 파일을 추가하세요<input type='file' onChange={newfileChange}/>
            {newFile && <img src={newFile} alt='file' width='300px' height='300px' />}<br/>
                <input  type='text' value={Link} onChange={newLinkChange} placeholder='링크 주소를 입력하세요'/><br/>
                <input  type='submit' value="추가하기" className='button'/>
            </form>

        <div className='subtitle'>삭제하기 </div>
        {partner.map((partner)=>(
            <>
              <div className='listBox' key={partner.id}>
                  <a href={partner.partnerLink}>
                      <div className='smallBox'>
                        <img src={partner.partnerURL} alt={partner.partnerLink}/>
                      </div>
                  </a>
                <button onClick={()=>{
                    // 컨펌 후 firesore에서 데이터 삭제, storage에서 데이터 삭제
                    const del = window.confirm("지우시겠습니까?");
                        if (del) {
                    dbService.doc(`partner/${partner.id}`).delete()
                    storageService.refFromURL(partner.partnerURL).delete()
                    alert('삭제를 완료했습니다. 새로고침 하시면 확인 가능합니다!')
                }
                }}>삭제하기</button>
                </div>
            </>
        ))}        
    </>
)  

}

export default Partner;