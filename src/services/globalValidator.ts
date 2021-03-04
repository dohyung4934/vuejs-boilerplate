const _validationRules = new Map<string, Map<string, ValidationSettings>>()

function GlobalValidate(group: string, rule: RegExp, errorMsg: string) {
    return function(target: any, propertyKey: string) {
        let groupRules = _validationRules.get(group)
        if (groupRules === undefined) {
            groupRules = new Map<string, ValidationSettings>()
            _validationRules.set(group, groupRules)
        }
        groupRules.set(propertyKey, { rule, errorMsg })
    }
}

interface ValidationSettings {
    rule: RegExp
    errorMsg: string
}

function validateForm(group: string, componentInstance: any, field = ''): boolean {
    const validationFields = _validationRules.get(group)
    if (validationFields === undefined) {
        throw new Error(`${group} 그룹에 속한 검증 데코레이터가 없습니다`)
    }
    let valid = true

    for (const fieldName of validationFields.keys()) {
        if (field !== '' && field !== fieldName) {
            continue
        }

        const fieldValue = componentInstance.$data[fieldName]
        const validationSettings = validationFields.get(fieldName)

        if (validationSettings === undefined) {
            throw new Error(`${fieldName} 필드에 대해 검증옵션이 저장되어 있지 않습니다.`)
        }

        const isValid = validationSettings.rule.test(fieldValue)
        const errorMsgFieldName = fieldName + 'Error'
        if (isValid) {
            componentInstance.$data[errorMsgFieldName] = ''
        } else {
            componentInstance.$data[errorMsgFieldName] = validationSettings.errorMsg
            valid = false
        }
    }

    return valid
}

export { GlobalValidate, validateForm }
