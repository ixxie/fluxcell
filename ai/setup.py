from setuptools import setup, find_packages

setup(
    name='fluxcell-ai',
    version='0.1.0',
    description='fluxcraft\'s native AI framework.',
    author='Matan Bendix Shenhav',
    author_email='matan@fluxcraft.net',
    url='https://www.github.com/fluxcraft/fluxcell',
    packages=find_packages('src'),
    package_dir={'': 'src'}
)
