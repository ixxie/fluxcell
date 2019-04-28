

class Section:

    header_types = ['h'+str(i) for i in range(1, 11)]
    leaf_types = ['p', 'blockquote']
    div_types = ['div']

    def __init__(self, source, ref, sec=None):

        self.ref = ref
        self.sec = sec
        self.name = None
        self.source = source

    def parse(self):

        # secNum = []
        self.data = {}

        for item in self.source:
            if item['type'] in self.leaf_types:
                self.data


class Header:

    def __init__(self, ref, sec=None):
        pass


class Subsec(Section):
    pass


class Supersec(Section):
    pass


class Para(Section):
    pass


class Quote(Para):
    pass


class Line(Section):
    pass
