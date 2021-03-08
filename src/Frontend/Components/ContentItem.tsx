/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import React, { ReactElement } from "react";
import { ContentModel } from "../../Types/ContentModel";

/**
 * Module:          ContentItem
 * Responsibility:  Show a content item.
 */

export function ContentItem(props: { item : ContentModel}): ReactElement {
    return (
        <div>{props.item.name}</div>
    );
}