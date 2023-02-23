import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Page } from '@/layout';
import GoBack from '@/components/Atoms/GoBack';
import data from '@/utils/data/info-data';
import DocImage1 from '@/assets/images/Info/DocImage1.png';
import DocImage2 from '@/assets/images/Info/DocImage2.png';

const Info = () => {
    const [content, setContent] = useState({});
    const { query } = useRouter();
    const { id } = query;

    console.log(id);
    console.log(data[id], 'data');
    console.log(content, 'content');
    console.log(DocImage1, 'image');

    useEffect(() => {
        setContent(data[id]);
    }, []);

    return (
        <Page>
            <div className="container">
                <GoBack />
                <div className="info">
                    <div className="info__container">
                        {!content?.title ? (
                            <>
                                <Image
                                    className="info__image"
                                    src={DocImage1}
                                    alt="info-image"
                                />
                                <Image
                                    className="info__image"
                                    src={DocImage2}
                                    alt="info-image"
                                />
                            </>
                        ) : (
                            <>
                                <h1 className="info__title">
                                    {content?.title && content?.title}
                                </h1>
                                <div className="info__subtitle">
                                    {content?.subtitle && content?.subtitle}
                                </div>
                                <ul className="info-content">
                                    {content?.list &&
                                        content?.list?.map((element, j) => (
                                            <li
                                                className="info-content__item"
                                                key={j}>
                                                <h3 className="info-content__title">
                                                    {element?.listTitle &&
                                                        element?.listTitle}
                                                </h3>
                                                <ul className="info-list">
                                                    {element?.listSubTitle &&
                                                        element?.listSubTitle?.map(
                                                            (subItem, k) => (
                                                                <li
                                                                    className="info-list__item"
                                                                    key={k}>
                                                                    {subItem?.title &&
                                                                        subItem?.title}
                                                                    <ul className="info-sublist">
                                                                        {subItem?.sublist &&
                                                                            subItem?.sublist?.map(
                                                                                (
                                                                                    e,
                                                                                    l,
                                                                                ) => (
                                                                                    <li
                                                                                        className="info-sublist__item"
                                                                                        key={
                                                                                            l
                                                                                        }>
                                                                                        <span>
                                                                                            {
                                                                                                e
                                                                                            }
                                                                                        </span>
                                                                                    </li>
                                                                                ),
                                                                            )}
                                                                    </ul>
                                                                </li>
                                                            ),
                                                        )}
                                                </ul>
                                            </li>
                                        ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default Info;
