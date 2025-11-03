# Brain Tumor Segmentation using Fine-Tuned nnU-Netv2

This project focuses on enhancing brain tumor segmentation through a fine-tuned version of the **nnU-Netv2** architecture. Leveraging deep learning and MRI-based medical imaging, our system improves the accuracy and reliability of tumor detection and segmentation.

We trained and evaluated the model on **BraTS 2020** and **BraTS 2021** datasets, using both standard and ResEnc nnU-Net configurations. To further boost performance, we applied ensemble techniques—**Max Probability** and **Probability Averaging**—which combine outputs from multiple models to generate smoother and more accurate segmentation maps.

A user-friendly interface has been developed to make this tool accessible for **medical professionals**, allowing for fast and reliable MRI analysis and tumor visualization.
### 🎥 Demo Video

[Watch Demo Video](https://drive.google.com/file/d/1a3h3RMWyfjiKHZHKxSVRLiBiGyP5dmg7/view?usp=sharing)

---

## Web Integration – *MindScan Platform*

To ensure the model's practical usability, we integrated it into a full-stack web application named **MindScan**, built with:

- **Frontend**: Angular – for an intuitive and responsive user interface.
- **Backend**: Spring Boot – to handle application logic and RESTful APIs.
- **Model Integration**: Flask – serving the trained nnU-Netv2 model.
- **Database**: PostgreSQL – to securely store patient data, MRI scans, and segmentation results.

**MindScan** is designed to assist **doctors** and **radiologists**, offering a seamless experience from scan upload to tumor visualization. It accelerates diagnostic workflows and improves the efficiency of brain tumor monitoring by providing accurate, real-time results. 

---

## Results

On evaluation using the **BraTS 2021 dataset**, the model demonstrated:

- **Mean Dice Score**: **84.45%** – reflecting a high overlap between predicted and ground truth tumor areas.
- **Mean IoU (Intersection over Union)**: **76.78%** – indicating high volumetric accuracy.
- **Sensitivity**: **88.6%** – effectively identifying a significant proportion of actual tumor regions.

---

## Purpose and Impact

This project is developed with a focus on **clinical relevance**:

- Assists **healthcare professionals** in diagnosing and evaluating brain tumors quickly.
- Supports **radiology centers** and **hospitals** by integrating with existing MRI workflows.
- Promotes **early detection and monitoring** of tumors, potentially leading to better patient outcomes.

---

##  Technologies Used

- Python, PyTorch, nnU-Netv2
- Flask
- Angular
- Spring Boot
