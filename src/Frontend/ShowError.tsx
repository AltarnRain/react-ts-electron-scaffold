/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          ShowError
 * Responsibility:  Shows a dialog with the error
 */

export function showError(error: string | undefined): void {
    alert(error);
}