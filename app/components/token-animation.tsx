"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BoxBack, BoxFront } from "./box-assets";

interface Token {
  id: string;
  name: string;
  logo: string;
  price: string;
  logoClassName?: string;
}

const TOKENS: Token[] = [
  { id: "sol", name: "SOL", logo: "/token-logo/sol.png", price: "$10.52", logoClassName: "p-1 rounded" },
  { id: "usdc", name: "USDC", logo: "/token-logo/usdc.png", price: "$10.52", logoClassName: "p-1 rounded" },
  { id: "eth", name: "ETH", logo: "/token-logo/eth.png", price: "$10.52", logoClassName: "rounded-full" },
  { id: "usdt", name: "USDT", logo: "/token-logo/usdt.png", price: "$10.52", logoClassName: "rounded-full" },
  { id: "link", name: "LINK", logo: "/token-logo/link.png", price: "$10.52", logoClassName: "p-1 rounded" },
  { id: "matic", name: "MATIC", logo: "/token-logo/matic.png", price: "$10.52", logoClassName: "p-1 rounded" },
];

interface TokenItemProps {
  token: Token;
  isSelected: boolean;
  onToggle: () => void;
}

function TokenItem({ token, isSelected, onToggle }: TokenItemProps) {
  return (
    <button
      onClick={onToggle}
      className="border-b border-[#E7E7E7] flex gap-2 items-center py-2 w-full text-left"
    >
      <motion.img
        layoutId={`token-${token.id}`}
        src={token.logo}
        alt={token.id}
        className={`w-10 h-10 ${token.logoClassName || ""}`}
      />
      <div className="flex flex-col flex-1">
        <p className="text-[13px]">{token.name}</p>
        <p className="text-[10px] text-gray-500">{token.price}</p>
      </div>
      <div className="relative flex items-center justify-center h-5 w-5 rounded-full border border-gray-300 mr-2">
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.1 } }}
              transition={{ type: "spring", duration: 0.25, bounce: 0 }}
            >
              <div className="absolute inset-0.5 rounded-full bg-white" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative h-5 w-5 flex-shrink-0 rounded-full text-black"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.5805 9.97493C15.8428 9.65434 15.7955 9.18183 15.4749 8.91953C15.1543 8.65724 14.6818 8.70449 14.4195 9.02507L10.4443 13.8837L9.03033 12.4697C8.73744 12.1768 8.26256 12.1768 7.96967 12.4697C7.67678 12.7626 7.67678 13.2374 7.96967 13.5303L9.96967 15.5303C10.1195 15.6802 10.3257 15.7596 10.5374 15.7491C10.749 15.7385 10.9463 15.6389 11.0805 15.4749L15.5805 9.97493Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}

function TokenAnimation() {
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [readyToDeposit, setReadyToDeposit] = useState(false);
  const [deposited, setDeposited] = useState(false);
  const [hide, setHide] = useState(false);

  const tokensToShow = readyToDeposit
    ? TOKENS.filter((t) => !selectedTokens.includes(t.id))
    : TOKENS;

  const toggleToken = (tokenId: string) => {
    setSelectedTokens((prev) =>
      prev.includes(tokenId)
        ? prev.filter((id) => id !== tokenId)
        : [...prev, tokenId]
    );
  };

  const clearSelection = () => {
    setSelectedTokens([]);
  };

  useEffect(() => {
    if (deposited) {
      setTimeout(() => {
        setHide(true);
      }, 1000);

      setTimeout(() => {
        setSelectedTokens([]);
        setReadyToDeposit(false);
        setDeposited(false);
      }, 1200);

      setTimeout(() => {
        setHide(false);
      }, 1700);
    }
  }, [deposited]);

  return (
    <MotionConfig transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}>
      <motion.div
        initial={false}
        animate={{ opacity: hide ? 0 : 1 }}
        className="relative flex h-[400px] flex-col items-center justify-center"
      >
        <AnimatePresence>
          {!readyToDeposit && (
            <motion.div
              exit={{ opacity: 0, filter: "blur(4px)", transition: { duration: 0.17 } }}
              className="relative bg-white rounded-t-xl p-1 shadow-[0_-1px_0_0_rgba(0,0,0,0.08),1px_0_0_0_rgba(0,0,0,0.08),-1px_0_0_0_rgba(0,0,0,0.08)] w-72 h-72 overflow-hidden"
            >
              <div className="h-full overflow-y-auto  no-scrollbar">
                {tokensToShow.map((token) => (
                  <TokenItem
                    key={token.id}
                    token={token}
                    isSelected={selectedTokens.includes(token.id)}
                    onToggle={() => toggleToken(token.id)}
                  />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </motion.div>
          )}
        </AnimatePresence>


        <AnimatePresence>
          {selectedTokens.length > 0 && !readyToDeposit && (
            <motion.div
              initial={{ y: 20, filter: "blur(4px)", opacity: 0 }}
              animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              exit={{ y: 20, filter: "blur(4px)", opacity: 0 }}
              className="absolute -bottom-16 inset-x-0 mx-auto w-fit flex gap-1 rounded-xl p-1 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0px_8px_8px_-8px_rgba(0,0,0,0.16)]"
            >
              <div className="flex w-full justify-between gap-1">
                <button
                  onClick={clearSelection}
                  className="flex w-12 flex-col items-center gap-[1px] rounded-lg pt-[6px] pb-1 text-[10px] font-medium text-[#8D8D86]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.8839 18.6339C10.3957 19.122 9.60427 19.122 9.11612 18.6339L3.36612 12.8839C3.1317 12.6495 3 12.3315 3 12C3 11.6685 3.13169 11.3506 3.36612 11.1161L9.11612 5.36612C9.60427 4.87796 10.3957 4.87796 10.8839 5.36612C11.372 5.85427 11.372 6.64573 10.8839 7.13388L7.26776 10.75H19.75C20.4404 10.75 21 11.3097 21 12C21 12.6904 20.4404 13.25 19.75 13.25H7.26777L10.8839 16.8661C11.372 17.3543 11.372 18.1457 10.8839 18.6339Z"
                      fill="currentColor"
                    />
                  </svg>
                  Back
                </button>
                <button className="flex w-12 flex-col items-center gap-[1px] rounded-lg pt-[6px] pb-1 text-[10px] font-medium text-[#8D8D86]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5"/>
                    <path d="M12 11v5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
                  </svg>
                  Info
                </button>
                <button
                  onClick={() => setReadyToDeposit(true)}
                  className="flex w-12 flex-col items-center gap-[1px] rounded-lg bg-[#F9F9F8] pt-[6px] pb-1 text-[10px] font-medium text-[#8D8D86] hover:bg-[#EFF6FF] hover:text-[#3B82F6]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 20h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  Deposit
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Confirm button when ready to deposit */}
        {readyToDeposit && (
          <motion.div
            initial={{ scale: 1.2, opacity: 0, filter: "blur(4px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3, bounce: 0, type: "spring" }}
            className="absolute bottom-10 flex flex-col gap-2"
          >
            <button
              onClick={() => setDeposited(true)}
              className="flex h-8 w-[200px] items-center justify-center gap-[15px] rounded-full bg-[#3B82F6] text-center text-[13px] font-semibold text-white"
            >
              {/* Deposit {selectedTokens.length} Token{selectedTokens.length > 1 ? "s" : ""} */}
              Confirm Deposit
            </button>
          </motion.div>
        )}

        {/* Box animation */}
        <AnimatePresence>
          {readyToDeposit && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-10 h-[152px] w-32 -translate-y-1/2">
              <motion.div
                initial={{ scale: 1.2, filter: "blur(4px)", opacity: 0 }}
                animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
                exit={{ scale: 1.2, filter: "blur(4px)", opacity: 0 }}
              >
                <BoxBack />
              </motion.div>

              <motion.div
                animate={{
                  y: deposited ? 147 : 110,
                  scale: deposited ? 0.7 : 1,
                  filter: deposited ? "blur(4px)" : "blur(0px)",
                }}
                transition={
                  deposited
                    ? { duration: 0.3, type: "spring", bounce: 0 }
                    : { delay: 0.13 }
                }
                className="absolute top-[-80px] flex w-full flex-col-reverse items-center"
              >
                {selectedTokens.map((tokenId, index) => {
                  const token = TOKENS.find((t) => t.id === tokenId);
                  if (!token) return null;
                  return (
                    <li key={token.id} className="flex h-1 items-center gap-2 list-none">
                      <motion.img
                        layoutId={`token-${token.id}`}
                        alt={token.name}
                        className="rounded-full"
                        src={token.logo}
                        height={50}
                        width={50}
                        style={{
                          rotate:
                            index % 2 === 0
                              ? 4 * (selectedTokens.length - index + 1)
                              : -1 * (selectedTokens.length - index + 1) * 4,
                        }}
                      />
                    </li>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.175, duration: 0 }}
                className="absolute bottom-[0] left-[4px] h-full w-[120px]"
              >
                <BoxFront />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
}

export default TokenAnimation;