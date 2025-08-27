import streamlit as st
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

# Load the LLaVA model and tokenizer
model_name = "liuhaotian/llava-v1.5-7b"  # Replace with the desired LLaVA model
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name, torch_dtype=torch.float16, device_map="auto"
)

# Function to generate a response
def generate_response(prompt):
    inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
    outputs = model.generate(**inputs, max_new_tokens=150)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response

# Streamlit App
st.title("AI Voice Assistant with LLaVA")
st.write("Control your AI assistant with voice commands or text input.")

# Wake Word Simulation
st.header("Wake Word Activation")
if st.button("Activate Assistant"):
    st.success("Assistant Activated! Say 'Hey Nova' to start.")

# LLM Integration with LLaVA
st.header("Ask the Assistant")
user_input = st.text_input("Type your question or command:")
if st.button("Get Response"):
    if user_input:
        try:
            assistant_response = generate_response(user_input)
            st.success(f"Assistant: {assistant_response}")
        except Exception as e:
            st.error(f"Error: {e}")

# Footer
st.markdown("---")
st.markdown("© 2025 AI Voice Assistant. All rights reserved.")