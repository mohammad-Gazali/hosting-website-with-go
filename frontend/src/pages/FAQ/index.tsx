import { Box, Container } from "@mui/material"
import { SectionTitle } from "../../components"
import { questions } from "../../constants"
import Question from "./Question"
import { useState } from "react"

const FAQ = () => {

  const [activeId, setActiveId] = useState<number | false>(false);

  return (
    <Container sx={{ mt: 5 }}>
      <SectionTitle>
        Frequently Asked Questions
      </SectionTitle>
      <Box mt={3}>
        {questions.map(question => {
          return <Question activeId={activeId} setActiveId={setActiveId} key={question.id} question={question} />
        })}
      </Box>
    </Container>
  )
}

export default FAQ