/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import React, { ReactElement, useEffect, useState } from "react";
import { ContentModel } from "../../Types/ContentModel";
import { FrontendMediator } from "../ICP/FrontendMediator";
import { handleResponse } from "../ICP/HandleResponse";
import { ContentItem } from "./ContentItem";

/**
 * Module:          Content
 * Responsibility:  Show the content of a folder or drive
 */

export function Content(props: { folder: string }): ReactElement {

    const [content, setContent] = useState<ContentModel[]>([]);

    useEffect(() => {
        (async () => {
            handleResponse(
                await FrontendMediator.listContent(props.folder),
                (x) => setContent(x),
            );
        })();
    },[props.folder]);

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            {
                content.map((c, i) => <ContentItem key={i} item={c} />)
            }
        </div>
    );
}