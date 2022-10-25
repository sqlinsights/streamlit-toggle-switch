import setuptools

setuptools.setup(
    name="streamlit_toggle_switch",
    version="1.0.2",
    author="Carlos D. Serrano",
    author_email="sqlinsights@gmail.com",
    description="Creates a customizable toggle",
    long_description="",
    long_description_content_type="text/plain",
    url="https://github.com/sqlinsights/streamlit-toggle-switch",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[],
    python_requires=">=3.6",
    install_requires=[
        "streamlit >= 0.63",
    ],
)
