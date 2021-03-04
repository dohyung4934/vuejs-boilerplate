// const _validationRules = new Map<string, Map<string, ValidationSettings>>()

enum RuleType {
    Preset,
    RegExp
}

enum PresetRule {
    Korean,
    English
}

interface Rule {
    type: RuleType
    preset?: PresetRule
    regexp?: RegExp
}

function ValidatePreset(presetRule: PresetRule, errorMsg: string) {
    return function(target: any, propertyKey: string) {
        target._validationRules = target._validationRules || new Map<string, ValidationSettings>()
        target._validationRules.set(propertyKey, {
            rule: {
                type: RuleType.Preset,
                preset: presetRule
            },
            errorMsg
        })
    }
}

function ValidateRegExp(regexp: RegExp, errorMsg: string) {
    return function(target: any, propertyKey: string) {
        target._validationRules = target._validationRules || new Map<string, ValidationSettings>()
        target._validationRules.set(propertyKey, {
            rule: {
                type: RuleType.RegExp,
                regexp
            },
            errorMsg
        })
    }
}

interface ValidationSettings {
    rule: Rule
    errorMsg: string
}

function testPreset(preset: PresetRule, text: string): boolean {
    switch (preset) {
        case PresetRule.Korean:
            return /^[가-힣 ]+$/.test(text)
        case PresetRule.English:
            return /^[A-Za-z ]+$/.test(text)
        default:
            throw new Error('지원하지 않는 preset 룰입니다.')
    }
}

function testRegExp(rule: RegExp, text: string): boolean {
    return rule.test(text)
}

function validateForm(componentInstance: any, field?: string): boolean {
    const validationFields: Map<string, ValidationSettings> = componentInstance.$data._validationRules
    if (validationFields === undefined) {
        throw new Error('검증 룰을 찾지 못했습니다')
    }
    let valid = true

    const fieldNames = field === undefined ? validationFields.keys() : [field]

    for (const fieldName of fieldNames) {
        const fieldValue = componentInstance.$data[fieldName]
        const validationSettings = validationFields.get(fieldName)

        if (validationSettings === undefined) {
            throw new Error(`${fieldName} 필드에 대해 검증옵션이 저장되어 있지 않습니다.`)
        }

        let isValid: boolean
        switch (validationSettings.rule.type) {
            case RuleType.Preset:
                if (!validationSettings.rule.preset) {
                    throw new Error('Preset 룰을 사용하는 경우 반드시 preset 값을 지정해 줘야 합니다.')
                }
                isValid = testPreset(validationSettings.rule.preset, fieldValue)
                break
            case RuleType.RegExp:
                if (!validationSettings.rule.regexp) {
                    throw new Error('RegExp 룰을 사용하는 경우 반드시 regexp 값을 지정해 줘야 합니다.')
                }
                isValid = testRegExp(validationSettings.rule.regexp, fieldValue)
                break
            default:
                throw new Error('지원하지 않는 RuleType입니다.')
        }

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

export { ValidatePreset, ValidateRegExp, validateForm }
