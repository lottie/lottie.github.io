import Ajv from "ajv/dist/2020"
import lottieSchema from "../assets/lottie.schema.json"

const ajv = new Ajv({
  keywords: [{ keyword: "$version" }],
})

export const validate = lottieStr => {
  if (!lottieStr) {
    throw new Error("Lottie cannot be empty")
  }

  if (typeof lottieStr !== "string") {
    throw new Error("Lottie must be a string")
  }

  try {
    const validate = ajv.compile(lottieSchema)
    const lottieJSON = JSON.parse(lottieStr)
    const isValid = validate(lottieJSON)

    if (isValid) {
      return []
    } else {
      return validate.errors
    }
  } catch (e) {
    throw new Error(`Could not validate Lottie JSON: ${e.message}`)
  }
}
