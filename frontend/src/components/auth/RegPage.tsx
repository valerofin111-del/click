import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import styles from '../../styles/auth.module.scss'
import { motion } from "motion/react";
import { Flex } from "@radix-ui/themes";
import { Link, useNavigate } from "react-router-dom";
import Card from "../library/Card/Card";
import PickText from "../library/PickText/PickText";
import colorThemeAtom from "../../atoms/colorThemeAtom";
import { useAtom, useAtomValue } from "jotai";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios'
import type { FC } from "react";
import authInputAtom from "../../atoms/authInputAtom";

var formSchema = z.object({
    name: z.string().min(3).max(20),
    key: z.string().min(3).max(20)
})

type Form = z.infer<typeof formSchema>

var RegPage : FC = function () {

  var nav = useNavigate()

  var theme = useAtomValue(colorThemeAtom)

  var [ inputs, setInputs ] = useAtom(authInputAtom)

  var fillFormKey = (e : any) : void => {
    setInputs(prev => ({
      name: prev.name,
      key: e.target.value
    }))
  }

  var fillFormName = (e : any) : void => {
    setInputs(prev => ({
      name: e.target.value,
      key: prev.key
    }))
  }

  var { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      key: ''
    },
    mode: 'onBlur'
  })

  var mutation = useMutation({
    mutationFn: (data) => axios.post('http://localhost:5000/user/create', data),
    onSuccess: () : void => {
      nav('/log', { replace: true })
      },
    onError: (e) => console.error(e)
  })

  var sendForm = function(data: any) : void {
    mutation.mutate(data)
  }

  return (
    <>
      <Flex justify={"center"}>
        <Card className={theme} mouseRotate={false} >

            <form onSubmit={handleSubmit(sendForm)}>
                <Flex justify={"center"} direction={"column"}>

                    <motion.span whileHover={{ scale: 1.05 }} className={styles.name}>
                      <PickText className={theme} >Name</PickText>

                      <Flex justify={'center'}>
                        <motion.input placeholder="name..." value={inputs.name} onChange={(e) => {
                        var regOnChange = register('name').onChange
                        if (regOnChange) regOnChange(e)

                        fillFormName(e)
                      }} whileHover={{ scale: 1.05, borderColor: 'hsl(0, 0%, 5%)' }} whileTap={{ scale: 0.95 }}
                        ref={register('name').ref}
                        name={register('name').name}
                        onBlur={register('name').onBlur} /> <br />
                      </Flex>
                    </motion.span>

                    <motion.span whileHover={{ scale: 1.05 }} className={styles.key} >
                      <PickText className={theme} >Key</PickText>

                      <Flex justify={'center'}>
                        <motion.input placeholder="key..." value={inputs.key} onChange={(e) => {
                        var regOnChange = register('key').onChange
                        if (regOnChange) regOnChange(e)

                        fillFormKey(e)
                      }} whileHover={{ scale: 1.05, borderColor: 'hsl(0, 0%, 5%)' }} whileTap={{ scale: 0.95 }}
                        ref={register('key').ref}
                        name={register('key').name}
                        onBlur={register('key').onBlur} /> <br />
                      </Flex>
                    </motion.span>

                    <motion.button className={styles.AuthButton}
                      type="submit" 
                      disabled={isSubmitting}
                      whileTap={{ scale: 0.95, backgroundColor: 'hsl(0, 59%, 61%)' }}
                      whileHover={{ scale: 1.05, color: 'hsl(0, 0%, 5%)' }}
                    >
                      {isSubmitting ? '...' : 'Submit'}
                    </motion.button> 

                    <span className={styles.Error} >
                      {Object.keys(errors).length > 0 && ('3-20 symbols in both inputs')} <br />
                    </span>

                </Flex>
            </form>    

        </Card>
      </Flex>
        
      <motion.span className={styles.Back} initial={{ y: 120 }} animate={{ y: -20 }} ><Link className={styles.Link} to='/'>Back</Link></motion.span>
    </>
  )
}

export default RegPage
