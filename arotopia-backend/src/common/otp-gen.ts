import otpGenerator from 'otp-generator'

export const generateOTP = (length: number) =>
    otpGenerator.generate(length, {
        digits: true,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false
    })