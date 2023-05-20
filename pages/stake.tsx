import { PublicKey } from "@solana/web3.js"
import { NextPage } from "next"
import { useState } from "react"

const Stake: NextPage<StakeProps> = ({ mint, imageSrc }) => {
    
    const [isStaking, setIsStaking] = useState(false)
    const [level, setLevel] = useState(1)
    return(
    <div></div>
    )
}

interface StakeProps {
    mint: PublicKey
    imageSrc: string
  }

Stake.getInitialProps = async ({ query }: any) => {
    const { mint, imageSrc } = query
  
  
    if (!mint || !imageSrc) throw { error: "no mint" }
  
    try {
      const mintPubkey = new PublicKey(mint)
      return { mint: mintPubkey, imageSrc: imageSrc }
    } catch {
      throw { error: "invalid mint" }
    }
}
export default Stake