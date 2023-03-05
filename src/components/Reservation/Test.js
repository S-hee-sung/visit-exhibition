import React, { useState } from 'react';

const Test = () => {
    const [activeContentIndex, setActiveContentIndex] = useState(0);

    const handleContentClick = (index) => {
        setActiveContentIndex(index);
    };

    const contents = [
        {
            imageSrc: "https://www.drawingroom.kr/exhibition/current",
            content: "슬픔은 파도처럼 밀려와",
            location: "[drawingRoom]",
            address: "서울 종로구 자하문로7길 68-4 2층"
        },
        {
            imageSrc: "./images/slide01-2.jpg",
            content: "NEW WAVE",
            location: "[스페이스 사직]",
            address: "서울 종로구 경희궁3가길 8-4"
        },
        {
            imageSrc: "./images/slide01-3.jpg",
            content: "이현정초대전",
            location: "[정문규 미술관]",
            address: "서울 종로구 성균관로5길 55-3"
        },
        {
            imageSrc: "./images/slide01-4.jpg",
            content: "최민솔개인전",
            location: "[갤러리 도스]",
            address: "서울 종로구 삼청로7길 37 갤러리도스"
        },
    ];

    return (
        <div>
            <div>
                {contents.map((content, index) => (
                    <div key={index} onClick={() => handleContentClick(index)}>
                        <img src={content.imageSrc} />
                        <p>{content.content}</p>
                    </div>
                ))}
            </div>
            <div>
                <img src={contents[activeContentIndex].imageSrc} />
                <p>{contents[activeContentIndex].content}</p>
            </div>
        </div>
    );
};

export default Test;